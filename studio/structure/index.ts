import {StructureBuilder} from 'sanity/structure'
import { FolderIcon } from '@sanity/icons/Folder'
import {UsersIcon} from '@sanity/icons/Users'
import { LinkIcon } from '@sanity/icons/Link'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Site structure')
    .items([
      S.documentTypeListItem('personalizedFolder')
        .title('Personalized folders')
        .icon(UsersIcon),
      S.documentTypeListItem('contentFolder')
        .title('Content folders')
        .child(S.documentTypeList('contentFolder').title('Content folders'))
        .icon(FolderIcon),
      S.divider(),
      S.documentTypeListItem('mainScreenLinks')
        .title('Main screen links')
        .icon(LinkIcon),
    ])
