import { List, ListIcon, ListItem } from '@chakra-ui/core';
import React from 'react';
import Dropzone from 'react-dropzone';
import { Controller } from 'react-hook-form';

export const FileInput = ({ control, name }) => (
  <Controller
    control={control}
    name={name}
    defaultValue={[]}
    render={({ onChange, onBlur, value }) => (
      <>
        <Dropzone onDrop={onChange}>
          {/* {({ getRootProps, getInputProps }) => (
              <Paper variant="outlined" {...getRootProps()}>
                <CloudUpload className={styles.icon} />
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>Drag 'n' drop files here, or click to select files</p>
              </Paper>
            )} */}
        </Dropzone>
        <List>
          {value.map((f, index) => (
            <ListItem key={index}>
              <ListIcon icon="download" />
              {f.name}
              {f.size}
            </ListItem>
          ))}
        </List>
      </>
    )}
  />
);

export default FileInput;
