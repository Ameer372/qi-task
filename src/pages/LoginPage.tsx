import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { navigate } from "wouter/use-browser-location";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useAuthStore from "@/stores/useAuthStore";
import { useTranslation } from "react-i18next";
import LangToggle from "@/components/LangToggle";

const loginSchema = z.object({
  username: z.string({ required_error: "Username is required" }),
  password: z.string({ required_error: "Password is required" }),
});

const LoginPage = () => {
  const { t } = useTranslation();

  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    loginMutation.mutate(
      { username: values.username.toLowerCase(), password: values.password },
      {
        onSuccess: (data) => {
          localStorage.setItem("token", data.token);
          useAuthStore.getState().login(data.token);
          navigate("/");
        },
        onError: (error) => {
          console.error("Login failed", error);
          alert("Login failed username or password is incorrect");
        },
      }
    );
  };

  const loginMutation = useAuth();

  return (
    <div className="flex items-center justify-center h-screen gap-4 login">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-md p-6 space-y-6 border rounded-4xl bg-background dark:bg-background shadow-2xl"
        >
          <div className="flex justify-between">
            <h1 className="text-4xl font-semibold">{t("login")}</h1>
            <LangToggle />
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("username")}</FormLabel>
                <FormControl>
                  <Input type="text" placeholder={t("username")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("password")}</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={t("password")}
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">{t("login")}</Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginPage;
