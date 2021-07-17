export const getMoney = async () => {
    const resp = await fetch("https://receh-database.herokuapp.com/monies");
    const res = await resp.json();
    const tableData = res.map((data) => ({
      id: data.id,
      nominal: data.nominal      
    }));
    return tableData
  }

  export const getMoneyNominalById = async (id) => {
    const resp = await fetch(`https://receh-database.herokuapp.com/monies/${id}`);
    const res = await resp.json();
    const nominal = res.nominal    
    return nominal
  }