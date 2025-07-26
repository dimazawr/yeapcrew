import { beforeEach, describe, expect, test } from "vitest";
import { useDataStore } from '../data';
import { createPinia, setActivePinia } from "pinia";

const mockRootFolder = {
     _type: 'personalizedFolder',
     _createdAt: new Date().toISOString(),
     _id: 'some-id',
     title: 'Root Folder',
     slug: {
          current: 'root-folder'
     },
     description: [],
     folders: [{
          _type: 'contentFolder',
          _id: '1',
          _rev: '1',
          _createdAt: new Date().toISOString(),
          _updatedAt: new Date().toISOString(),
          title: 'Subfolder 1',
          parentFolder: {
               _type: 'reference',
               _ref: null
          },
          content: []
     },
     {
          _type: 'contentFolder',
          _id: '2',
          _rev: '2',
          _createdAt: new Date().toISOString(),
          _updatedAt: new Date().toISOString(),
          title: 'Subfolder 2',
          parentFolder: {
               _type: 'reference',
               _ref: null
          },
          content: [{
               _type: 'contentSource',
               _key: 'some-key',
               title: 'Some Title',
               link: 'https://example.com'
          }]
     }]
};

const mockMainScreenLinks = {
     _type: 'mainScreenLinks',
     links: [{
          title: "Instagram",
          url: "https://instagram.com",
          iconUrl: "https://example.com/icon.png"
     }]
};

describe('Data Store Tests', () => {

     beforeEach(() => {
          setActivePinia(createPinia())
     })


     test('should initialize with default values', () => {
          const dataStore = useDataStore();
          expect(dataStore.data).toEqual(undefined);
          expect(dataStore.linksData).toEqual({
               _type: 'mainScreenLinks',
               links: [],
          });
     });

     test('should update data correctly', () => {
          const dataStore = useDataStore();
          dataStore.setData([mockRootFolder]);
          expect(dataStore.data).toEqual(mockRootFolder);
     });

     test('should set links data correctly', () => {

          const dataStore = useDataStore();
          dataStore.setLinks(mockMainScreenLinks);
          expect(dataStore.linksData).toEqual(mockMainScreenLinks);
     })
     test('should return content folder data by name', () => {
          const dataStore = useDataStore();
          dataStore.setData([mockRootFolder]);
          const contentFolder = dataStore.getContentFolderData('Subfolder 1');
          expect(contentFolder).toEqual(mockRootFolder.folders[0]);
     });
})
