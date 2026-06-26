import bcrypt from "bcrypt";
import ValidationErrors from "../Errors/errors.validadition";

// Retornar hash de senha:
export async function hashPass(password:string){
    const saltRounds = 10; // Saltos para o hash da senha;
    
    // Hash de senha:
    const hash = await bcrypt.hash(password, saltRounds);
    return hash; // Retornando o hash da senha.
}

// Comparar senha:
export async function comparePass(password:string) {
    
}

