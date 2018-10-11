class Job {
    id: string;
    title: string;
    company:  string;
    city: string;
    zipcode: string;
    description: string;
    contract: string;
    salary: number;
    currency: number;
    startdate: Date;
    experience: string;
    status: string;
    area: string;
    field: string;
    publishdate: Date;
    lastupdate: Date;
}

class ContractType {
    id: number;
    name: string;
    value: string;
}

class Currency {
    id: number;
    name: string;
    value: string;
    symbol: string;
}

class Status {
    id: number;
    name: string;
    value: string;
}

class Experience {
    id: number;
    name: string;
    value: string;
}

class Area {
    id: number;
    name: string;
    value: string;
}


class GetJobResponse {
    success: boolean;
    message: string;
    job: Job;
}
