onRecordAfterCreateSuccess((e) => {
  try {
    const message = new MailerMessage({
      from: {
        address: $app.settings().meta.senderAddress || 'noreply@vexaview.com',
        name: $app.settings().meta.senderName || 'VexaView CRM',
      },
      to: [{ address: e.record.getString('email') }],
      subject: 'Acesso ao VexaView CRM',
      html: '<p>Parabéns por assinar o melhor serviço de CRM do Brasil, segue abaixo o link de acesso para acessar o CRM (<a href="https://crm-vexa.goskip.app/">https://crm-vexa.goskip.app/</a>) e caso precise de suporte, nos chame através do nosso email vexaview@gmail.com que nosso time entrará em contato assim que possível.</p>',
    })
    $app.newMailClient().send(message)
  } catch (err) {
    $app
      .logger()
      .error('Failed to send subscription email', 'error', err.message, 'recordId', e.record.id)
  }
  return e.next()
}, 'subscriptions')
