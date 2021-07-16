export const getChangeMoney = async () => {
    const resp = await fetch("http://localhost:1337/change-monies");
    const res = await resp.json();
    const tableData = res.map((data) => ({
      id: data.id,
      changeNominal: data.change-nominal,
      fragments: data.fragments
    }));
    return tableData
}