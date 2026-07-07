"use client";

import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function TesteFirebasePage() {
  async function testar() {
    try {
      await setDoc(doc(db, "teste", "conexao"), {
        mensagem: "Firebase funcionando",
        data: new Date().toISOString(),
      });

      alert("Salvou no Firebase!");
      console.log("Salvou no Firebase!");
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao salvar. Veja o Console.");
    }
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Teste Firebase</h1>

      <button
        onClick={testar}
        style={{
          background: "black",
          color: "white",
          padding: "12px 20px",
          borderRadius: 8,
        }}
      >
        Testar salvar
      </button>
    </main>
  );
}