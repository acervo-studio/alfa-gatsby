import styled from 'styled-components';
import { Type, TypeProps } from '../Type/styled';

export enum TypeParagraphSizes {
  XS,
  S,
  M,
  L,
  XL,
}

export const TypeParagraph = styled(Type).attrs<TypeProps>((props: any) => ({
  sizes: props.theme.paragraphs,
}))<TypeProps>``;
