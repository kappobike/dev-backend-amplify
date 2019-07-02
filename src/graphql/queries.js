// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUserProfile = `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
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
      trips {
        nextToken
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
export const listUserProfiles = `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getCountry = `query GetCountry($id: ID!) {
  getCountry(id: $id) {
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
export const listCountrys = `query ListCountrys(
  $filter: ModelCountryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCountrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      country_name
      regions {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getRegion = `query GetRegion($id: ID!) {
  getRegion(id: $id) {
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
export const listRegions = `query ListRegions(
  $filter: ModelRegionFilterInput
  $limit: Int
  $nextToken: String
) {
  listRegions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getZone = `query GetZone($id: ID!) {
  getZone(id: $id) {
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
  }
}
`;
export const listZones = `query ListZones(
  $filter: ModelZoneFilterInput
  $limit: Int
  $nextToken: String
) {
  listZones(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      zone_name
      region {
        id
        region_name
      }
      trips {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getTrip = `query GetTrip($id: ID!) {
  getTrip(id: $id) {
    id
    ts_start
    ts_finish
    time_seconds
    date_trip
    zone {
      id
      zone_name
      region {
        id
        region_name
      }
      trips {
        nextToken
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
export const listTrips = `query ListTrips(
  $filter: ModelTripFilterInput
  $limit: Int
  $nextToken: String
) {
  listTrips(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      ts_start
      ts_finish
      time_seconds
      date_trip
      zone {
        id
        zone_name
      }
      user {
        id
        name
        email
        company_email
        os
      }
      createdAt
    }
    nextToken
  }
}
`;
export const getRanking = `query GetRanking($id: ID!) {
  getRanking(id: $id) {
    id
    zone {
      id
      zone_name
      region {
        id
        region_name
      }
      trips {
        nextToken
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
export const listRankings = `query ListRankings(
  $filter: ModelRankingFilterInput
  $limit: Int
  $nextToken: String
) {
  listRankings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      zone {
        id
        zone_name
      }
      ranking_type
      user {
        id
        name
        email
        company_email
        os
      }
      valrank
    }
    nextToken
  }
}
`;
