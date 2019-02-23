import { storiesOf } from '@storybook/vue'
import Logo from '@/components/Logo'

storiesOf('Logo', module).add('demo', () => ({
  components: { Logo },
  template: `<Logo />`
}))
