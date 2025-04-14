import { globalStyle, style } from '@vanilla-extract/css'

globalStyle(`html`, {
  fontFamily: 'system-ui',
  fontSize: '14px',
  lineHeight: 1.5
})

globalStyle('body', {
  margin: 0
})

export const indexClassName = style({
  margin: '1rem'
})
