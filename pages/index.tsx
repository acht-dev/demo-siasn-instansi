import { useKeycloak } from "@react-keycloak/ssr";
import type { KeycloakInstance, KeycloakTokenParsed } from "keycloak-js";
import { type } from "os";
import { useRouter } from "next/router";
import { Layout } from "./../components/sso/Layout";
import { useEffect } from "react";
import Cookies from "js-cookie";

type ParsedToken = KeycloakTokenParsed & {
  email?: string;

  preferred_username?: string;

  given_name?: string;

  family_name?: string;
};

const IndexPage = () => {
  const router = useRouter();
  const { keycloak } = useKeycloak<KeycloakInstance>();
  const parsedToken: ParsedToken | undefined = keycloak?.tokenParsed;
  const logged = keycloak.authenticated;
  const token = keycloak.token;
  // const rolesToken =

  const loggedinState = keycloak?.authenticated ? (
    <span className='text-success'>logged in</span>
  ) : (
    <span className='text-danger'>NOT logged in</span>
  );

  const welcomeMessage =
    keycloak?.authenticated || (keycloak && parsedToken) ? (
      `Welcome back ${parsedToken?.preferred_username ?? ""}!`
    ) : (
      <div>
        {/* <h1 className="mt-5">token: {keycloak?.token}</h1> */}
        {/* <p>Realm Access Offline : {parsedToken?.realm_access?.roles[0]}</p> */}
        {/* <p>Realm Access Uma : {parsedToken?.realm_access?.roles[1]}</p> */}
        {/* <h1 className="mt-5">Hello Next.js + Keycloak 👋</h1> */}
        {/* <h3>realm: {keycloak?.realm}</h3> */}
        <p>You are: {loggedinState}</p>
        <p>
          Silahkan melakukan login untuk dapat mengakses sistem{" "}
          {process.env.NEXT_PUBLIC_REALM_IAM}
        </p>
      </div>
    );

  useEffect(() => {
    if (logged) {
      const roles = keycloak.realmAccess.roles;
      const tokenRoles = "role:siasn-instansi:operator";
      const tokenString = roles
        .filter(function (str) {
          return str.includes(tokenRoles);
        })
        .toString();
      const tokenParsing = tokenString
        .split(":")
        .filter(function (str) {
          return str.includes("operator");
        })
        .toString();
      Cookies.set("roles", tokenParsing);
      Cookies.set("token", token);
      router.push("/tampilanData");
    }
  }, [logged]);

  return (
    <Layout title='BKN Login'>
      <p>{welcomeMessage}</p>
    </Layout>
  );
};

export default IndexPage;
