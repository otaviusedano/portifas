import type { Client } from '@/types'

import bmg from '@/assets/images/svg/clients/Banco bmg logo.svg'
import btg from '@/assets/images/svg/clients/Btg logo.svg'
import caixa from '@/assets/images/svg/clients/Caixa logo.svg'
import cdlCuiaba from '@/assets/images/svg/clients/Cdl cuiabá logo.svg'
import embraco from '@/assets/images/svg/clients/Consórcio Embracon Logo.svg'
import fpass from '@/assets/images/svg/clients/Fpass logo.svg'
import fulltrader from '@/assets/images/svg/clients/Logo Fulltrader.svg'
import manobra from '@/assets/images/svg/clients/Manobra Logo.svg'
import oak from '@/assets/images/svg/clients/Oak Tecnologia Logo.svg'
import rodobens from '@/assets/images/svg/clients/Rodobens logo.svg'
import topaz from '@/assets/images/svg/clients/Topaz logo.svg'
import vendi from '@/assets/images/svg/clients/Vendi Logo.svg'

/**
 * "Enum" de logos dos clientes, indexado pelo id em `data/clients.ts`.
 * Cada valor é a URL do SVG resolvida pelo Vite. O ClientsStrip usa isto
 * no lugar do nome do cliente.
 */
export const clientLogos: Record<Client['id'], string> = {
  caixa,
  topaz,
  manobra,
  btg,
  bmg,
  embraco,
  'cdl-cuiaba': cdlCuiaba,
  fpass,
  fulltrader,
  oak,
  rodobens,
  vendi,
}
