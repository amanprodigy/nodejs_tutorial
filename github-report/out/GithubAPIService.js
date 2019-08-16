"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var user_1 = require("./user");
var repo_1 = require("./repo");
var OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var GithubAPIService = /** @class */ (function () {
    function GithubAPIService() {
        this.githubUrl = 'https://api.github.com/users/';
    }
    GithubAPIService.prototype.getUserInfo = function (name, cb) {
        var url = this.githubUrl + name;
        request.get(url, OPTIONS, function (error, response, body) {
            if (error) {
                throw error;
            }
            var user = new user_1.User(body);
            cb(user);
        });
    };
    GithubAPIService.prototype.getRepos = function (name, cb) {
        var url = this.githubUrl + name + '/repos';
        request.get(url, OPTIONS, function (error, response, body) {
            if (error) {
                throw error;
            }
            // Using lodash forEach
            //let repos = [];
            //_.forEach(body, (item)=>{
            //    let repo = new Repo(item);
            //    repos.push(repo);
            //});
            // Using map
            var repos = body.map(function (repo) { return new repo_1.Repo(repo); });
            cb(repos);
        });
    };
    return GithubAPIService;
}());
exports.GithubAPIService = GithubAPIService;
