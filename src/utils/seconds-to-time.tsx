const SecondsToTime = (seconds: number): string => {
  // 1. Função auxiliar para formatação
  const zeroPad = (num: number) => String(num).padStart(2, '0')

  // 2. Trata casos não positivos
  if (seconds <= 0) {
    return '00 : 00'
  }

  // 3. O cálculo é o mesmo, independentemente de ser menos ou mais de 1 hora (3600s).
  // O formato MM:SS apenas trata tudo acima de 59:59 como se estivesse em minutos.

  // Calcula o total de minutos
  const totalMinutes = Math.floor(seconds / 60)

  // Calcula os segundos restantes (sempre de 0 a 59)
  const remainingSeconds = seconds % 60

  // 4. Retorna o resultado formatado
  // Ex: 3661 segundos = 61 minutos e 1 segundo -> "61 : 01"
  return `${zeroPad(totalMinutes)} : ${zeroPad(remainingSeconds)}`
}

export default SecondsToTime
