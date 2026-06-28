interface requisition {
    email_usuario: string;
    senha_usuario: string;
}
export default function loginUser(data: requisition): Promise<"Senha incorreta!" | "login efetuado!">;
export {};
//# sourceMappingURL=controller.login.d.ts.map