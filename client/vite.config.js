import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // optimizeDeps: {
  //   exclude: ['react-modal']
  // }
})


// import { defineConfig, loadEnv } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
//   return {
//     define: {
//       'process.env.VITE_PORT': JSON.stringify(env.PORT)
//     },
//     plugins: [react()],
//   }
// })




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: { 
//     host: '0.0.0.0'
//   },
//   define: {
//     'process.env': {}
//   }
// })