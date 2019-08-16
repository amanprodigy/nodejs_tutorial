import * as request from 'request';
import * as _ from 'lodash';
import { User } from "./user";
import { Repo } from "./repo";

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};

export class GithubAPIService{

    githubUrl: string = 'https://api.github.com/users/';

    getUserInfo(name, cb: (user: User) => any){
        var url = this.githubUrl + name;
        request.get(url, OPTIONS, (error: any, response: any, body: any) => {
            if(error){
                throw error;
            }
            let user = new User(body);
            cb(user);
        });
    }

    getRepos(name, cb: (repos: Repo[]) => any){
        var url = this.githubUrl + name + '/repos';
        request.get(url, OPTIONS, (error: any, response: any, body: any) => {
            if(error){
                throw error;
            }

            // Using lodash forEach
            //let repos = [];
            //_.forEach(body, (item)=>{
            //    let repo = new Repo(item);
            //    repos.push(repo);
            //});

            // Using map
            let repos = body.map((repo: any) => new Repo(repo));

            cb(repos);
        });
    }

}
