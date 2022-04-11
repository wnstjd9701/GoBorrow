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
