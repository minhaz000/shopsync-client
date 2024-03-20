/// <reference types="react-scripts" />
// react-app-env.d.ts

interface ProcessEnv {
  NODE_ENV: "development" | "production" | "test";
  REACT_APP_SERVER_URL: string;
  REACT_APP_GOOGLE_CLIENT_ID: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends ProcessEnv {}
  }
}
