export async function getOrganizationInfoByName(connection, organizationName) {
  const organizationNameSearch = '%' + organizationName + '%';
  const getOrganizationResult = `
  SELECT organizationName,
  managerName,
  address,
  detailAddress,
  phoneNumber,
  info,
  organizationImage,
  useCertification,
  certificationInfo
FROM Organization
WHERE organizationName LIKE ?;
`;
  const [organizationResult] = await connection.query(getOrganizationResult, organizationNameSearch);
  return organizationResult;
}

export async function retrieveOrganizationInformation(connection, organizationName) {
  const selectOrganizationInformation = `
  SELECT i.itemId,
       o.organizationImage,
       o.organizationName,
       o.address,
       o.detailAddress,
       o.phoneNUmber,
       o.managerName,
       o.info,
       p.productImage,
       p.productName,
       p.info,
       p.price,
       i.itemStatus,
       c.categoryName
FROM Product p,
     Organization o,
     Item i,
     Category c
WHERE p.organizationId = o.organizationId
  and p.productId = i.productId
  and p.categoryId = c.categoryId
  and o.organizationName = ?
GROUP BY p.productName;
  `;
  const [organizationInformationResult] = await connection.query(selectOrganizationInformation, organizationName);
  return organizationInformationResult;
}

export async function retrieveOrganizaionProductInformation(connection, params) {
  const selectOrganizationProductInformation = `
  SELECT i.itemId,
       i.itemName,
       i.itemStatus,
       i.itemStatus,
       p.productImage,
       p.info,
       p.price
FROM Organization o,
     Product p,
     Item i
WHERE o.organizationId = p.organizationId
  and p.productId = i.productId
  and o.organizationName = ?
  and p.productId = ?
ORDER BY i.itemId;
  `;
  console.log(params);
  const [organizationProductInformationResult] = await connection.query(selectOrganizationProductInformation, params);
  return organizationProductInformationResult;
}
