interface requisition {
    email_usuario: string;
    senha_usuario: string;
}
export default function loginUser(data: requisition): Promise<"Login efetuado!" | "Senha incorreta!">;
export {};
//# sourceMappingURL=controller.login.d.ts.map