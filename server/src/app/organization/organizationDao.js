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
  SELECT o.organizationImage,
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
       p.quantity - (select count(*) as lending from Item WHERE itemStatus = '대여 중') as leftItem,
       c.categoryName
FROM Product p
         LEFT JOIN Organization o on o.organizationId = p.organizationId
         LEFT JOIN Category c on p.categoryId = c.categoryId
WHERE o.organizationName = ?;
  `;
  const [organizationInformationResult] = await connection.query(selectOrganizationInformation, organizationName);
  return organizationInformationResult;
}

export async function retrieveOrganizaionProductInformation(connection, organizationName, productId) {
  const selectOrganizationProductInformation = `
  SELECT p.productId, p.productName, p.productImage, p.info, p.price
FROM Organization o,
     Product p,
     Item i
WHERE o.organizationId = p.organizationId
  and p.productId = i.productId
  and o.organizationId = ?
  and p.productId = ?
ORDER BY i.itemId;
  `;
  const [organizationProductInformationResult] = await connection.query(selectOrganizationProductInformation, organizationName, productId);
  return organizationProductInformationResult;
}
