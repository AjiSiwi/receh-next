export const getMoney = async () => {
    const resp = await fetch("http://localhost:1337/monies");
    const res = await resp.json();
    const tableData = res.map((data) => ({
      id: data.id,
      nominal: data.nominal      
    }));
    return tableData
  }