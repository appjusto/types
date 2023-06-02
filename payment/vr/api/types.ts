// create payment

export interface CreateVRPaymentPayload {
  valor: number;
  id_filiacao: number;
  // id_transacao_van: string;
  // quantidade_parcelas: number;
  cartao_token_id: string;
  // key_id: string;
  // cartao_dados_criptografados?: string;
  // cartao?: {
  //   nome: string;
  //   numero_cartao: string;
  //   data_expiracao: string;
  //   cvv: string;
  //   documento: string;
  // };
}

export interface CreateVRPaymentResult {
  id_transacao: string;
  // id_transacao_van: string;
  // id_filiacao: string;
  valor: number;
  // data: string;
  // status: 'CONFIRMADA';
  codigo_retorno: '00';
  codigo_autorizacao: string;
  mensagem: 'SUCCESS';
}

// confirm or cancel payment

export interface UpdateVRPaymentPayload {
  acao: 'efetivar' | 'cancelar';
  valor: number;
  id_filiacao: number;
}

export interface VRPaymentResult {
  id_transacao: string;
  valor: number;
  codigo_retorno: '00';
  codigo_autorizacao: string;
  mensagem: 'SUCCESS';
}
