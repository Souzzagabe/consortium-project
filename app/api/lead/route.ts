import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { nome, email, telefone, valorDesejado } = body;

    // Validation
    if (!nome || !telefone || !valorDesejado) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    // Send email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Matheus Multiplica <onboarding@resend.dev>",
      to: "gabweb95@gmail.com",
      subject: `Novo lead: ${nome}`,
      html: `
        <h2 style="color:#00BF6F;">Novo Lead - Matheus Multiplica</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;font-weight:bold;">Nome:</td><td style="padding:8px;">${nome}</td></tr>
          <tr style="background:#f5f5f5;"><td style="padding:8px;font-weight:bold;">E-mail:</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Telefone:</td><td style="padding:8px;">${telefone}</td></tr>
          <tr style="background:#f5f5f5;"><td style="padding:8px;font-weight:bold;">Valor desejado:</td><td style="padding:8px;">${valorDesejado}</td></tr>
        </table>
      `,
    });

    console.log("New lead:", { nome, email, telefone, valorDesejado });

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
