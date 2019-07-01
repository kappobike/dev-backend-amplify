// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUserProfile = `mutation CreateUserProfile($input: CreateUserProfileInput!) {
  createUserProfile(input: $input) {
    id
    name
    email
    company_email
    os
    user_location {
      id
      zone_name
      region {
        id
        region_name
      }
    }
    trips {
      items {
        id
        ts_start
        ts_finish
        time_seconds
        date_trip
        createdAt
      }
      nextToken
    }
    rankings {
      items {
        id
        ranking_type
        valrank
      }
      nextToken
    }
  }
}
`;
export const updateUserProfile = `mutation UpdateUserProfile($input: UpdateUserProfileInput!) {
  updateUserProfile(input: $input) {
    id
    name
    email
    company_email
    os
    user_location {
      id
      zone_name
      region {
        id
        region_name
      }
    }
    trips {
      items {
        id
        ts_start
        ts_finish
        time_seconds
        date_trip
        createdAt
      }
      nextToken
    }
    rankings {
      items {
        id
        ranking_type
        valrank
      }
      nextToken
    }
  }
}
`;
export const deleteUserProfile = `mutation DeleteUserProfile($input: DeleteUserProfileInput!) {
  deleteUserProfile(input: $input) {
    id
    name
    email
    company_email
    os
    user_location {
      id
      zone_name
      region {
        id
        region_name
      }
    }
    trips {
      items {
        id
        ts_start
        ts_finish
        time_seconds
        date_trip
        createdAt
      }
      nextToken
    }
    rankings {
      items {
        id
        ranking_type
        valrank
      }
      nextToken
    }
  }
}
`;
export const createCountry = `mutation CreateCountry($input: CreateCountryInput!) {
  createCountry(input: $input) {
    id
    country_name
    regions {
      items {
        id
        region_name
      }
      nextToken
    }
  }
}
`;
export const updateCountry = `mutation UpdateCountry($input: UpdateCountryInput!) {
  updateCountry(input: $input) {
    id
    country_name
    regions {
      items {
        id
        region_name
      }
      nextToken
    }
  }
}
`;
export const deleteCountry = `mutation DeleteCountry($input: DeleteCountryInput!) {
  deleteCountry(input: $input) {
    id
    country_name
    regions {
      items {
        id
        region_name
      }
      nextToken
    }
  }
}
`;
export const createRegion = `mutation CreateRegion($input: CreateRegionInput!) {
  createRegion(input: $input) {
    id
    region_name
    country {
      id
      country_name
      regions {
        nextToken
      }
    }
    zones {
      items {
        id
        zone_name
      }
      nextToken
    }
  }
}
`;
export const updateRegion = `mutation UpdateRegion($input: UpdateRegionInput!) {
  updateRegion(input: $input) {
    id
    region_name
    country {
      id
      country_name
      regions {
        nextToken
      }
    }
    zones {
      items {
        id
        zone_name
      }
      nextToken
    }
  }
}
`;
export const deleteRegion = `mutation DeleteRegion($input: DeleteRegionInput!) {
  deleteRegion(input: $input) {
    id
    region_name
    country {
      id
      country_name
      regions {
        nextToken
      }
    }
    zones {
      items {
        id
        zone_name
      }
      nextToken
    }
  }
}
`;
export const createZone = `mutation CreateZone($input: CreateZoneInput!) {
  createZone(input: $input) {
    id
    zone_name
    region {
      id
      region_name
      country {
        id
        country_name
      }
      zones {
        nextToken
      }
    }
  }
}
`;
export const updateZone = `mutation UpdateZone($input: UpdateZoneInput!) {
  updateZone(input: $input) {
    id
    zone_name
    region {
      id
      region_name
      country {
        id
        country_name
      }
      zones {
        nextToken
      }
    }
  }
}
`;
export const deleteZone = `mutation DeleteZone($input: DeleteZoneInput!) {
  deleteZone(input: $input) {
    id
    zone_name
    region {
      id
      region_name
      country {
        id
        country_name
      }
      zones {
        nextToken
      }
    }
  }
}
`;
export const createTrip = `mutation CreateTrip($input: CreateTripInput!) {
  createTrip(input: $input) {
    id
    ts_start
    ts_finish
    time_seconds
    date_trip
    trip_location {
      id
      zone_name
      region {
        id
        region_name
      }
    }
    user {
      id
      name
      email
      company_email
      os
      user_location {
        id
        zone_name
      }
      trips {
        nextToken
      }
      rankings {
        nextToken
      }
    }
    createdAt
  }
}
`;
export const updateTrip = `mutation UpdateTrip($input: UpdateTripInput!) {
  updateTrip(input: $input) {
    id
    ts_start
    ts_finish
    time_seconds
    date_trip
    trip_location {
      id
      zone_name
      region {
        id
        region_name
      }
    }
    user {
      id
      name
      email
      company_email
      os
      user_location {
        id
        zone_name
      }
      trips {
        nextToken
      }
      rankings {
        nextToken
      }
    }
    createdAt
  }
}
`;
export const deleteTrip = `mutation DeleteTrip($input: DeleteTripInput!) {
  deleteTrip(input: $input) {
    id
    ts_start
    ts_finish
    time_seconds
    date_trip
    trip_location {
      id
      zone_name
      region {
        id
        region_name
      }
    }
    user {
      id
      name
      email
      company_email
      os
      user_location {
        id
        zone_name
      }
      trips {
        nextToken
      }
      rankings {
        nextToken
      }
    }
    createdAt
  }
}
`;
export const createRanking = `mutation CreateRanking($input: CreateRankingInput!) {
  createRanking(input: $input) {
    id
    zone {
      id
      zone_name
      region {
        id
        region_name
      }
    }
    ranking_type
    user {
      id
      name
      email
      company_email
      os
      user_location {
        id
        zone_name
      }
      trips {
        nextToken
      }
      rankings {
        nextToken
      }
    }
    valrank
  }
}
`;
export const updateRanking = `mutation UpdateRanking($input: UpdateRankingInput!) {
  updateRanking(input: $input) {
    id
    zone {
      id
      zone_name
      region {
        id
        region_name
      }
    }
    ranking_type
    user {
      id
      name
      email
      company_email
      os
      user_location {
        id
        zone_name
      }
      trips {
        nextToken
      }
      rankings {
        nextToken
      }
    }
    valrank
  }
}
`;
export const deleteRanking = `mutation DeleteRanking($input: DeleteRankingInput!) {
  deleteRanking(input: $input) {
    id
    zone {
      id
      zone_name
      region {
        id
        region_name
      }
    }
    ranking_type
    user {
      id
      name
      email
      company_email
      os
      user_location {
        id
        zone_name
      }
      trips {
        nextToken
      }
      rankings {
        nextToken
      }
    }
    valrank
  }
}
`;
