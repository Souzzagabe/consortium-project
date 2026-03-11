import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      nome,
      email,
      telefone,
      valorConsorcio,
      parcelaSimulada,
      tipoConsorcio,
      horarioLigacao,
    } = body;

    // Validation
    if (!nome || !telefone || !valorConsorcio) {
      return NextResponse.json(
        { error: "Campos obrigatórios: nome, telefone e valor do consórcio." },
        { status: 400 }
      );
    }

    // Send email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Matheus Multiplica <onboarding@resend.dev>",
      to: "mateusmutiplica@gmail.com",
      subject: `Novo lead: ${nome}`,
      html: `
        <h2 style="color:#00BF6F;font-family:sans-serif;">Novo Lead — Matheus Multiplica</h2>
        <table style="border-collapse:collapse;width:100%;max-width:540px;font-family:sans-serif;font-size:14px;">
          <tr>
            <td style="padding:10px 8px;font-weight:bold;width:200px;">Nome:</td>
            <td style="padding:10px 8px;">${nome}</td>
          </tr>
          <tr style="background:#f5f5f5;">
            <td style="padding:10px 8px;font-weight:bold;">E-mail:</td>
            <td style="padding:10px 8px;">${email || "—"}</td>
          </tr>
          <tr>
            <td style="padding:10px 8px;font-weight:bold;">Telefone:</td>
            <td style="padding:10px 8px;">${telefone}</td>
          </tr>
          ${tipoConsorcio ? `
          <tr style="background:#f5f5f5;">
            <td style="padding:10px 8px;font-weight:bold;">Tipo de consórcio:</td>
            <td style="padding:10px 8px;">${tipoConsorcio}</td>
          </tr>` : ""}
          <tr ${tipoConsorcio ? "" : 'style="background:#f5f5f5;"'}>
            <td style="padding:10px 8px;font-weight:bold;">Valor do consórcio:</td>
            <td style="padding:10px 8px;">${valorConsorcio}</td>
          </tr>
          ${parcelaSimulada ? `
          <tr style="background:#f5f5f5;">
            <td style="padding:10px 8px;font-weight:bold;">Parcela simulada:</td>
            <td style="padding:10px 8px;color:#00BF6F;font-weight:bold;">${parcelaSimulada}</td>
          </tr>` : ""}
          ${horarioLigacao ? `
          <tr>
            <td style="padding:10px 8px;font-weight:bold;">Melhor horário:</td>
            <td style="padding:10px 8px;">${horarioLigacao}</td>
          </tr>` : ""}
        </table>
      `,
    });

    console.log("New lead:", { nome, email, telefone, valorConsorcio, parcelaSimulada, tipoConsorcio, horarioLigacao });

    return NextResponse.json(
      { message: "Lead recebido com sucesso!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json(
      { error: "Erro ao processar solicitação." },
      { status: 500 }
    );
  }
}
