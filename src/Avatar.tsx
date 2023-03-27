import { useQuery } from '@apollo/client';

import { gql } from './__generated__/gql';

const GET_ARTIFACT_BY_ID = gql(`
    query GetArtifactById($id: ID!) {
        artifactById(id: $id) {
            nvr
            build { status }
            status
        }
    }
`);

export function Avatar(_props: {}) {
    const { data, loading } = useQuery(
        GET_ARTIFACT_BY_ID,
        { variables: { id: 'bunny4211' } },
    );

    if (loading)
        return (
            <div><h3>Loading avatar…</h3></div>
        );

    return (
        <div>
            <h3>Avatar</h3>
            <dl>
                <dt>Artifact NVR</dt>
                <dd>{data.artifactById.nvr}</dd>
                <dt>Status</dt>
                <dd>{data.artifactById.status}</dd>
                <dt>Build status</dt>
                <dd>{data.artifactById.build.status}</dd>
            </dl>
        </div>
    );
}
