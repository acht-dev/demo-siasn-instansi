import { useKeycloak } from '@react-keycloak/ssr'
import type { KeycloakInstance } from 'keycloak-js'
import Link from 'next/link'
import * as React from 'react'

export const Header: React.FC = () => {
  const { keycloak } = useKeycloak<KeycloakInstance>()

  return (
    <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <Link href="/">
        <a className="my-0 mr-md-auto font-weight-bold text-dark">
          BKN
        </a>
      </Link>
      {keycloak?.authenticated ? (
        <>
          <button
            type="button"
            className="mx-2 btn btn-outline-danger"
            onClick={() => {
              if (keycloak) {
                window.location.href = keycloak.createLogoutUrl()
              }
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            className="mx-2 btn btn-outline-success"
            onClick={() => {
              if (keycloak) {
                window.location.href = keycloak.createLoginUrl()
              }
            }}
          >
            Login
          </button>
        </>
      )}
    </header>
  )
}
