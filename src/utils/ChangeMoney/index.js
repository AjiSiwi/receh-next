export const getChangeMoney = async () => {
    const resp = await fetch("https://receh-database.herokuapp.com/change-monies");
    const res = await resp.json();
    const tableData = res.map((data) => ({
      id: data.id,
      changeNominal: data.change_nominal,
      fragments: data.fragments
    }));
    return tableData
}