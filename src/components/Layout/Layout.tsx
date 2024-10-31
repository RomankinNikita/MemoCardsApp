import {
  Navbar,
  NavbarBackLink,
  Page,
} from "konsta/react";
import { PropsWithChildren } from "react";
import { useRouter } from "@tanstack/react-router";
import cn from "../../utils/cn";
import Tabs from "../Tabs/Tabs";

type LayoutProps = PropsWithChildren<{
  title?: string;
  back?: boolean;
  mainCn?: string;
}>;

export default function Layout(props: LayoutProps) {
  const { children, title, back, mainCn } = props;
  const { history } = useRouter();

  return (
    <Page className="flex flex-col">
      <Navbar
        left={
          back ? (
            <NavbarBackLink showText={false} onClick={() => history.go(-1)} />
          ) : undefined
        }
        title={title}
      />

      <main className={cn("p-4 flex flex-col flex-1", mainCn)}>{children}</main>

      <Tabs />
    </Page>
  );
}
