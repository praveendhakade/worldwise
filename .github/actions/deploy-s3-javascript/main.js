const core = require("@actions/core");
// const github = require("@actions/github");
const exec = require("@actions/exec");
function run() {
    // get inputs
    const bucket = core.getInput('bucket', { required: true})
    const buckerRegion = core.getInput('bucket-region', { required: true})
    const distFolder = core.getInput('dist-folder', { required: true})

    // github.getOctokit
    // upload files
    const s3Uri = `s3://${bucket}` 
    exec.exec(`aws s3 sync  ${distFolder} ${s3Uri} --region ${buckerRegion}`)

    const websiteUrl = `http://${bucket}.s3-website-${buckerRegion}.amazonaws.com`;
    core.setOutput( 'website-url', websiteUrl)
}

run();