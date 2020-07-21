import { deploy } from 'segment-sloth'
import * as core from '@actions/core'

let access_token = core.getInput('segment-access-token')
let work_slug = core.getInput('segment-workspace-slug')
let work_id = core.getInput('segment-workspace-id')

deploy(false, access_token, work_slug, work_id).then(() => {
  console.log('Function successfully deployed')
}).catch(e => {
  console.error('Error deploying function:')
  console.error(e)
})