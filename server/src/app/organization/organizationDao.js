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
       p.productId,
       p.productImage,
       p.productName,
       p.info,
       p.price,
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
  const [organizationProductInformationResult] = await connection.query(selectOrganizationProductInformation, params);
  return organizationProductInformationResult;
}

export async function retrieveOrganizationIdByProductId(connection, productId) {
  const selectOrganizationId = `
  SELECT organizationId
  FROM Product
  WHERE productId = 1;`;
  const [organizationId] = await connection.query(selectOrganizationId, productId);
  return organizationId;
}

export async function insertRentInfromataion(connection, params) {
  const insertIntoRentInfromation = `
  INSERT INTO Rent (userId, organizationId, itemId, productId, startDate, startTime, endDate,
    endTime)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?);
  `;
  const [insertRentProductInfromation] = await connection.query(insertIntoRentInfromation, params);
  return insertRentProductInfromation;
}

export async function getItemIdList(connection, itemId) {
  const selectItemId = `
  SELECT itemId
  FROM Rent
  WHERE itemId = ?;
  `;
  const [itemIdResult] = await connection.query(selectItemId, itemId);
  return itemIdResult;
}
