import { format, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

export function fDate(date) {
  // Defesa: Retorna string vazia se a data for nula ou indefinida.
  if (!date) return '';

  try {
    const dateObj = new Date(date);
    // Defesa: Verifica se o objeto Date criado é válido.
    if (isNaN(dateObj.getTime())) {
      // Se a data for inválida, loga o erro e retorna o valor original para não quebrar a UI.
      console.error('Valor de data inválido recebido para fDate:', date);
      return String(date);
    }
    return format(dateObj, 'dd/MM/yyyy');
  } catch (err) {
    console.error('Erro em fDate:', err);
    return String(date); // Retorna o valor original em caso de qualquer erro.
  }
}

export function fDateTime(date) {
  if (!date) return '';
  try {
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      console.error('Valor de data inválido recebido para fDateTime:', date);
      return String(date);
    }
    return format(dateObj, 'dd MMM yyyy HH:mm');
  } catch (err) {
    console.error('Erro em fDateTime:', err);
    return String(date);
  }
}

export function fDateTimeSuffix(date) {
  if (!date) return '';
  try {
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      console.error('Valor de data inválido recebido para fDateTimeSuffix:', date);
      return String(date);
    }
    return format(dateObj, 'dd/MM/yyyy hh:mm p');
  } catch (err) {
    console.error('Erro em fDateTimeSuffix:', err);
    return String(date);
  }
}

export function fToNow(date) {
  if (!date) return '';
  try {
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      console.error('Valor de data inválido recebido para fToNow:', date);
      return String(date);
    }
    return formatDistanceToNow(dateObj, {
      addSuffix: true
    });
  } catch (err) {
    console.error('Erro em fToNow:', err);
    return String(date);
  }
}
