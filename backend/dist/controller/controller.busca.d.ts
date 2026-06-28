interface requisition {
    "reqType": string;
    "search": string;
}
export default function pesquisaData(data: requisition): Promise<string | number | import("mysql2").RowDataPacket[]>;
export {};
//# sourceMappingURL=controller.busca.d.ts.map