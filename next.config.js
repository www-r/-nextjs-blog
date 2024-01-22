/** @type {import('next').NextConfig} */
const nextConfig = {
  images : {
    dangerouslyAllowSVG: true,
   remotePatterns : [
    {
      protocol : 'https',
      hostname : 'prod-files-secure.s3.us-west-2.amazonaws.com',
    },
    {
      protocol:'https',
      hostname: 'file.notion.so'
    },
    {
      protocol:'https',
      hostname: 'bleyetciwkirndgevlln.supabase.co'
    }
   ]
  },

}

module.exports = nextConfig
