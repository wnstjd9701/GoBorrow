export async function organizationIdCheck(connection, organizationName) {
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
