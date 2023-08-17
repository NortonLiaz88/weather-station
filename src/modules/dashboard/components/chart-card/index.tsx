import React from 'react';
import {CardContainer, CardContent, CardTitle} from './styles';

interface Props {
  children: React.ReactNode;
  title: string;
}

export const ChartCard: React.FC<Props> = ({children, title}: Props) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
};
