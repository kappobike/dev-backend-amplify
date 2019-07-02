// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUserProfile = `subscription OnCreateUserProfile {
  onCreateUserProfile {
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
export const onUpdateUserProfile = `subscription OnUpdateUserProfile {
  onUpdateUserProfile {
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
export const onDeleteUserProfile = `subscription OnDeleteUserProfile {
  onDeleteUserProfile {
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
export const onCreateCountry = `subscription OnCreateCountry {
  onCreateCountry {
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
export const onUpdateCountry = `subscription OnUpdateCountry {
  onUpdateCountry {
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
export const onDeleteCountry = `subscription OnDeleteCountry {
  onDeleteCountry {
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
export const onCreateRegion = `subscription OnCreateRegion {
  onCreateRegion {
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
export const onUpdateRegion = `subscription OnUpdateRegion {
  onUpdateRegion {
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
export const onDeleteRegion = `subscription OnDeleteRegion {
  onDeleteRegion {
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
export const onCreateZone = `subscription OnCreateZone {
  onCreateZone {
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
export const onUpdateZone = `subscription OnUpdateZone {
  onUpdateZone {
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
export const onDeleteZone = `subscription OnDeleteZone {
  onDeleteZone {
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
export const onCreateTrip = `subscription OnCreateTrip {
  onCreateTrip {
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
export const onUpdateTrip = `subscription OnUpdateTrip {
  onUpdateTrip {
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
export const onDeleteTrip = `subscription OnDeleteTrip {
  onDeleteTrip {
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
export const onCreateRanking = `subscription OnCreateRanking {
  onCreateRanking {
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
export const onUpdateRanking = `subscription OnUpdateRanking {
  onUpdateRanking {
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
export const onDeleteRanking = `subscription OnDeleteRanking {
  onDeleteRanking {
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
