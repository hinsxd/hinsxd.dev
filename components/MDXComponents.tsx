import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'

export const components: MDXComponents = {
  Image,
  TOCInline,
  // @ts-ignore
  a: CustomLink,
  // @ts-ignore
  pre: Pre,
  table: TableWrapper,
  CodeSandBox,
  BlogNewsletterForm,
}
import { CodeSandBox } from '@/components/CodeSandBox'
