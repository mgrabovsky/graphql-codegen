/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  NVR: any;
};

export type Artifact = {
  __typename?: 'Artifact';
  build: ArtifactBuild;
  id: Scalars['ID'];
  nvr: Scalars['String'];
  status: ArtifactStatus;
};

export type ArtifactBuild = {
  __typename?: 'ArtifactBuild';
  id: Scalars['ID'];
  status: BuildStatus;
};

export enum ArtifactStatus {
  Building = 'BUILDING',
  Failed = 'FAILED',
  Finished = 'FINISHED',
  Testing = 'TESTING'
}

export enum BuildStatus {
  Accepted = 'ACCEPTED',
  Complete = 'COMPLETE',
  Failed = 'FAILED',
  Queued = 'QUEUED',
  Running = 'RUNNING'
}

export type Query = {
  __typename?: 'Query';
  artifactById?: Maybe<Artifact>;
  artifactsByNvr?: Maybe<Array<Artifact>>;
};


export type QueryArtifactByIdArgs = {
  id: Scalars['ID'];
};


export type QueryArtifactsByNvrArgs = {
  nvr: Scalars['NVR'];
};

export type GetArtifactByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetArtifactByIdQuery = { __typename?: 'Query', artifactById?: { __typename?: 'Artifact', nvr: string, status: ArtifactStatus, build: { __typename?: 'ArtifactBuild', status: BuildStatus } } | null };


export const GetArtifactByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArtifactById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"artifactById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nvr"}},{"kind":"Field","name":{"kind":"Name","value":"build"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetArtifactByIdQuery, GetArtifactByIdQueryVariables>;