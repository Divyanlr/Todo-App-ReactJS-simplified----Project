import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";
  
  // https://vitejs.dev/config/
  export default defineConfig({
      plugins: [react()],
      server: {
        allowedHosts: ['h9sdc9-5173.csb.app', '7crgdw-5173.csb.app']  
      }
  });
  