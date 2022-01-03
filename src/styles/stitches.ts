/**
 * dynamic imports for chunk(code splitting)
 */

import dynamic from 'next/dynamic'
const stitches = dynamic(() => import('@stitches.js'))

export default stitches
