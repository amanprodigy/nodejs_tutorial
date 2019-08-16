
export class Repo{
    name: string;
    description: string;
    url: string;
    size: number;
    forkCount: number;

    constructor(repoResponse){
        this.name = repoResponse.name;
        this.description = repoResponse.description;
        this.url = repoResponse.url;
        this.size = repoResponse.size;
        this.forkCount = repoResponse.forks_count;
    }
}
