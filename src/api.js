// src/api.js
export const fetchData = async () => {
    const branchUrls = ['api/branch1.json', 'api/branch2.json', 'api/branch3.json'];
    const allData = await Promise.all(branchUrls.map(url => fetch(url).then(res => res.json())));
    
    // Merge all branches data
    const mergedData = allData.flat().reduce((acc, product) => {
      if (acc[product.name]) {
        acc[product.name].revenue += product.revenue;
      } else {
        acc[product.name] = { name: product.name, revenue: product.revenue };
      }
      return acc;
    }, {});
  
    return Object.values(mergedData);
  };
  