import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <ArrowCircleUp size={32} color={"#0664BB"} />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={"#F75A68"} />
        </header>

        <strong>R$ 1.259,00</strong>
      </SummaryCard>

      <SummaryCard variant="blue">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={"#FFFFFF"} />
        </header>

        <strong>R$ 16.141,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}