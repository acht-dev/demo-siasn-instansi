import {Header} from "./Header";
import { Footer } from "./Footer";
import { useKeycloak } from '@react-keycloak/ssr'
import type { KeycloakInstance, KeycloakTokenParsed } from 'keycloak-js'
import Head from "next/head";
import { Container } from "react-bootstrap";
import * as React from 'react'
import { useRouter } from "next/router";
import Cookies from 'js-cookie';

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPost } from "../redux/actions/postAction";

export const Layout: React.FC = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { keycloak } = useKeycloak<KeycloakInstance>()
  const logged = keycloak.authenticated;
  
  const tokenCookie = Cookies.get('token');

  useEffect(() => {
 //   dispatch(fetchPost());
    if (tokenCookie === undefined) {
      router.push('/');
    }
  }, [tokenCookie]);

  const { posts } = useSelector((state) => state.post);
  // console.log(posts);
  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Layanan Peremajaan</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.min.css'
        />
        {/* <!-- Datatables--> */}
        <link
          href='https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css'
          rel='stylesheet'
        />
        {/* Jquery */}
        <script
          src='https://code.jquery.com/jquery-3.5.1.slim.min.js'
          integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
          crossOrigin='anonymous'></script>
        {/* Jquery DataTables */}
        <script src='https//cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js'></script>
        {/* JS Bootsrap */}
        <script
          src='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'
          integrity='sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV'
          crossOrigin='anonymous'></script>
        {/* JS Popper */}
        <script
          src='https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js'
          integrity='sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN'
          crossOrigin='anonymous'></script>
        {/* JS moment */}
        <script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js'></script>
        {/* <!-- JS Date TIme Picker --> */}
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.full.min.js'></script>
        {/* {/* <!-- JS Data Table --> */}
        <script src='https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js'></script>
        <script src='https://cdn.datatables.net/plug-ins/1.10.21/i18n/Indonesian-Alternative.json'></script>
        <script src='https://cdn.datatables.net/buttons/1.6.4/js/buttons.html5.min.js'></script>
        <script src='https://cdn.datatables.net/buttons/1.6.4/js/dataTables.buttons.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js'></script>
        <script src='https://cdn.datatables.net/plug-ins/1.10.21/i18n/Indonesian.json'></script>

        <script src='../js/monitoringusulan.js'></script>
        <script src='../js/monitoringpenetapan.js'></script>
        <link rel='icon' href="%PUBLIC_URL%/favicon.ico"/>
        <script
          src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'
          integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM'
          crossOrigin='anonymous'></script>
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
          integrity='sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z'
          crossOrigin='anonymous'
        />
      </Head>
      <Header></Header>
      <Container style={{minHeight:"700px"}}>{props.children}</Container>
      <Footer></Footer>
    </div>
  );
}
